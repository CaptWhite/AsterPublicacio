// src/app/cleaner/page.js
"use client";

import React, { useState } from 'react';

export default function Cleaner() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  // Función para limpiar el texto usando Regex
  const handleCleanText = () => {
    // Regex para eliminar contenido entre '<!.. -->'
    let text_ = text.replace(/\<\!-- --\>/g, '');
    text_ = text_.replace(/\<script\>[\s\S]*?\<\/script\>/g, '');
    const cleanedText = text_.replace(/\<script src=[\s\S]*?\<\/script\>/g, '');
    
    setText(cleanedText);  // Actualiza el textarea con el texto modificado
    setMessage('Cambios efectuados');  // Muestra el mensaje

    // Copiar el texto limpio al portapapeles
    navigator.clipboard.writeText(cleanedText)
      .then(() => console.log('Texto copiado al portapapeles'))
      .catch(err => console.error('Error al copiar:', err));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Limpiador de Texto</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Introduce el texto aquí..."
        rows={8}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleCleanText}>Limpiar</button>
      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
    </div>
  );
}
