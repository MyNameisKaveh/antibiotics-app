fetch('data/antibiotics.json')
   .then(response => response.json())
   .then(data => {
     const container = document.getElementById('antibiotics-container');
     data.forEach(ab => {
       const card = document.createElement('div');
       card.className = 'card';
       card.innerHTML = `
         <h2>${ab.name}</h2>
         <p><strong>Class:</strong> ${ab.class}</p>
         <p><strong>Spectrum:</strong> ${ab.spectrum}</p>
         <p><strong>Mechanism:</strong> ${ab.mechanism}</p>
         <p><strong>Resistance:</strong> ${ab.resistance}</p>
       `;
       container.appendChild(card);
     });
   });
