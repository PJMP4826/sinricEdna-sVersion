const db = require('../config/db');

exports.verifyPassword = (req, res) => {
    const { userId, password } = req.body;

    db.query(
        'SELECT password FROM users WHERE id = ?',
        [userId],
        (error, results) => {
            if (error) {
                return res.status(500).json({ success: false, message: "Error de servidor" });
            }
            
            if (results.length > 0 && results[0].password === password) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        }
    );
};


// Función para cambiar la contraseña
exports.changePassword = (req, res) => {
    console.log(req.body); 
    const { id, newPassword } = req.body;

    if (!id || !newPassword) {
        return res.status(400).json({ error: 'ID y nueva contraseña son necesarios' });
    }

    const query = 'UPDATE users SET password = ? WHERE id = ?';
    db.query(query, [newPassword, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al cambiar la contraseña' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID no encontrado' });
        }

        res.json({ message: 'Contraseña cambiada exitosamente' });
    });
};