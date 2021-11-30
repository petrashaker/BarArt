function zmenaFormulare(formular) {
  const pocet = formular.objednavka.value
  const velikost = formular.velikost.value
  if (pocet === 'jedna' && velikost === 'medium') {
    document.querySelector('#medium').disabled = false
  } else if(pocet === 'jedna' && velikost === 'mini') {
    document.querySelector('#mini').checked = true
  } else if(pocet === 'jedna' && velikost === 'small') {
    document.querySelector('#small').checked = true
  } else if(pocet === 'jedna' && velikost === 'big') {
    document.querySelector('#big').checked = true
  }

  if(pocet === 'dve' || pocet === 'tri' && velikost === 'medium') {
    document.querySelector('#mini').disabled = true
    document.querySelector('#small').disabled = true
    document.querySelector('#medium').disabled = false
    document.querySelector('#big').disabled = true
    document.querySelector('#great').disabled = false
    // document.querySelector('#medium').checked = true
  } else if (pocet === 'dve' || pocet === 'tri' && velikost === 'great') {
    document.querySelector('#mini').disabled = true
    document.querySelector('#small').disabled = true
    document.querySelector('#medium').disabled = false
    document.querySelector('#big').disabled = true
    document.querySelector('#great').checked = true
  } else if (pocet === 'jedna') {
    document.querySelector('#mini').disabled = false
    document.querySelector('#small').disabled = false
    document.querySelector('#medium').disabled = false
    document.querySelector('#big').disabled = false
    document.querySelector('#great').disabled = true
  } else if (pocet === 'tri') {
    document.querySelector('#mini').disabled = true
    document.querySelector('#small').disabled = true
    document.querySelector('#medium').disabled = false
    document.querySelector('#big').disabled = true
    document.querySelector('#great').disabled = false
  }
  
  let cena = 0
  if (pocet === 'jedna') {
    if (velikost === 'mini') cena = '1 500 Kč'
    if (velikost === 'small') cena = '2 000 Kč'
    if (velikost === 'medium') cena = '2 800 Kč'
    if (velikost === 'big') cena = '3 000 Kč'
  }
  if (pocet === 'dve' && velikost === 'medium') cena = '4 000 Kč'
  if (pocet === 'dve' && velikost === 'great') cena = '6 000 Kč'
  if (pocet === 'tri' && velikost === 'medium') cena = '5 000 Kč'
  if (pocet === 'tri' && velikost === 'great') cena = '7 000 Kč'
  document.querySelector('#cena').innerHTML = cena
}
