fetch('data/antibiotics.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('antibiotics-container');
    data.forEach(ab => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${ab.name}</h2>
        <p><strong>CID:</strong> ${ab.cid}</p>
        <p><strong>PubChem URL:</strong> <a href="${ab.pubchem_url}" target="_blank">${ab.pubchem_url}</a></p>
        <p><strong>Class:</strong> ${ab.class || 'Not found'}</p>
        <p><strong>Spectrum:</strong> ${ab.spectrum || 'Not found'}</p>
        <p><strong>Spectrum Type:</strong> ${ab.spectrum_type || 'Not found'}</p>
        <p><strong>Resistance:</strong> ${ab.resistance || 'Not found'}</p>
        <p><strong>Target Bacteria:</strong> ${ab.target_bacteria || 'Not found'}</p>
        <p><strong>Gram Coverage:</strong> ${ab.gram_coverage || 'Not found'}</p>
        <p><strong>Clinical Use:</strong> ${ab.clinical_use || 'Not found'}</p>
        <p><strong>Side Effects:</strong> ${ab.side_effects || 'Not found'}</p>
        <p><strong>Administration Route:</strong> ${ab.administration_route || 'Not found'}</p>
        <p><strong>Mechanism:</strong> ${ab.mechanism || 'Not found'}</p>
        <p><strong>Pharmacology:</strong> ${ab.pharmacology || 'Not found'}</p>
        <p><strong>Drug Class:</strong> ${ab.drug_class || 'Not found'}</p>
        <p><strong>Antibacterial Activity:</strong> ${ab.antibacterial_activity || 'Not found'}</p>
        <p><strong>Structure Image:</strong> <a href="${ab.structure_image}" target="_blank">View Image</a></p>
        <p><strong>Molecular Formula:</strong> ${ab.molecular_formula || 'Not found'}</p>
        <p><strong>Molecular Weight:</strong> ${ab.molecular_weight || 'Not found'}</p>
        <p><strong>SMILES:</strong> ${ab.smiles || 'Not found'}</p>
        <p><strong>InChI Key:</strong> ${ab.inchi_key || 'Not found'}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
