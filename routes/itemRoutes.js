const router = require('express').Router();
const Item = require('../models/Item');
const auth = require('../middleware/auth');

// READ (Protegido: solo devuelve los elementos creados por el usuario autenticado)
router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user._id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los elementos' });
  }
});

// CREATE (Protegido: asocia automáticamente el elemento al ID del usuario del token)
router.post('/', auth, async (req, res) => {
  try {
    const newItem = new Item({
      title: req.body.title,
      description: req.body.description,
      userId: req.user._id // Extraído de forma segura del token JWT decodificado
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el elemento' });
  }
});

// UPDATE (Protegido: actualiza solo si el elemento pertenece al usuario autenticado)
router.put('/:id', auth, async (req, res) => {
  try {
    const updatedItem = await Item.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    
    if (!updatedItem) {
      return res.status(404).json({ error: 'Elemento no encontrado o no autorizado' });
    }
    
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar el elemento' });
  }
});

// DELETE (Protegido: elimina solo si el elemento pertenece al usuario autenticado)
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedItem = await Item.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.user._id 
    });
    
    if (!deletedItem) {
      return res.status(404).json({ error: 'Elemento no encontrado o no autorizado' });
    }
    
    res.json({ message: 'Elemento eliminado correctamente' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar el elemento' });
  }
});

module.exports = router;