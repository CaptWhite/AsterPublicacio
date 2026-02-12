// src/app/cleaner/page.js
"use client";

import React, { useState } from 'react';
import { Head } from '../../components/Head';


export default function Cleaner() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');


  const cleaner = () => {
    if (text) {

      // Regex para eliminar contenido entre '<!.. -->'
      let text_ = text.replace(/\<\!--[if[\s\S]*?\>\<\!\[endif\]-->\n?/g, '');
      text_ = text_.replace(/\s*<!-- -->\s*/g, '');
      text_ = text.replace(/\<\!--[\s\S]*?--\>\n?/g, '');
      text_ = text_.replace(/\<script\>[\s\S]*?\<\/script\>/g, '');
      const cleanedText = text_.replace(/\<script src=[\s\S]*?\<\/script\>/g, '');
    
      // Copiar el texto limpio al portapapeles
      navigator.clipboard.writeText(cleanedText)
        .then(() => console.log('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar:', err));
        return cleanedText
    };
  }

  // Función para limpiar el texto usando Regex
  const handleCleanText = () => {
    console.log("handleCleanText1", text)
    const cleanedText = cleaner(text) 
    console.log("handleCleanText2", cleanedText)
    setText(cleanedText);  // Actualiza el textarea con el texto modificado
    setMessage('HTML modificat i desat al porta-papers');  // Muestra el mensaje
  }

  return (
    <table align="center" width="800px">
      <tbody>
        <tr>
          <td>
            <Head id='' date='' />
              <table align="center" >
                <tbody>
                  <tr>
                    <td>
                      <table className="row-content mn-row-content-headline" align="center" width="800">
                        <tbody>
                          <tr>
                            <td>
                              <div className="mn-main-headline" style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
                                <h2 align="center">Optimitzador d'HTML</h2>
                                <textarea
                                  value={text}
                                  onChange={(e) => setText(e.target.value)}
                                  placeholder="Enganxa el codi font HTML aquí..."
                                  cols={80}
                                  rows={8}
                                  style={{ width: '100%', marginBottom: '10px', overflow:'auto'}}
                                />
                                <button className="mn-h1-article-title" style={{color:"white", background:'#007C89',borderRadius:'1rem', padding:"10px 20px"}}onClick={handleCleanText}>Optimitzar</button>
                                {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
                               </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
          </td>
        </tr>
      </tbody>
  </table>
  );
}
