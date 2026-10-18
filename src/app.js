// Base Dashboard - simple frontend logic ideas

async function fetchGasPrice() {
  // Example: use public Base RPC
  const response = await fetch('https://mainnet.base.org', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_gasPrice',
      params: [],
      id: 1
    })
  });
  const data = await response.json();
  return parseInt(data.result, 16);
}

async function updateDashboard() {
  const gas = await fetchGasPrice();
  console.log('Current Base gas price (wei):', gas);
  // Update DOM here
}

// Call on load
updateDashboard();
