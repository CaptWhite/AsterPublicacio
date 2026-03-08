import React, { useState, useEffect } from 'react';

const HTMLCodeComponent: React.FC = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        // Usamos el path relativo al origen de la base de Astro
        const response = await fetch('./');
        const html = await response.text();
        
        // Aplicar limpieza Regex
        let text_ = html.replace(/\<\!--\[if[\s\S]*?\]\>\<\!\[endif\]--\>\n?/g, '');
        text_ = text_.replace(/\s*<!-- -->\s*/g, '');
        text_ = text_.replace(/\<\!--[\s\S]*?--\>\n?/g, '');
        text_ = text_.replace(/\<script\>[\s\S]*?\<\/script\>/g, '');
        const cleanedText = text_.replace(/\<script src=[\s\S]*?\<\/script\>/g, '');

        setText(cleanedText);
        setMessage('Codi HTML obtingut i optimitzat correctament');
      } catch (err) {
        console.error('Error en carregar el HTML:', err);
        setMessage('Error en carregar el HTML');
      }
    };

    fetchHTML();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => setMessage('Codi copiat al porta-papers'))
      .catch(err => {
        console.error('Error al copiar:', err);
        setMessage('Error al copiar el text');
      });
  };

  return (
    <table align="center">
      <tbody>
        <tr>
          <td>
            <table className="row-content mn-row-content-headline" align="center" width="800">
              <tbody>
                <tr>
                  <td>
                    <div className="mn-main-headline" style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
                      <h2 align="center">Codi Font HTML</h2>
                      <textarea
                        value={text}
                        readOnly
                        placeholder="Carregant HTML..."
                        cols={80}
                        rows={15}
                        style={{ width: '100%', marginBottom: '10px', overflow: 'auto', fontFamily: 'monospace' }}
                      />
                      <button 
                        className="mn-h1-article-title" 
                        style={{ color: "white", background: '#007C89', borderRadius: '1rem', padding: "10px 20px", border: 'none', cursor: 'pointer' }}
                        onClick={handleCopy}
                      >
                        Copiar Codi
                      </button>
                      {message && <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{message}</p>}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HTMLCodeComponent;
