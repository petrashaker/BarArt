function zmenaFormulare(formular) {
  const pocet = formular.objednavka.value
  const velikost = formular.velikost.value
  if (pocet === 'jedna') {
    document.querySelector('#mensi').disabled = false
  } else {
    document.querySelector('#vetsi').checked = true
    document.querySelector('#mensi').disabled = true
  }
  let cena = 0
  if (pocet === 'jedna') {
    if (velikost === 'mensi') cena = '1 300 Kč'
    if (velikost === 'vetsi') cena = '2 000 Kč'
  }
  if (pocet === 'dve') cena = '3 000 Kč'
  if (pocet === 'tri') cena = '3 500 Kč'
  document.querySelector('#cena').innerHTML = cena
}
