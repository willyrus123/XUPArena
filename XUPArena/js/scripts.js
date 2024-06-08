document.getElementById('connectButton')?.addEventListener('click', async () => {
  console.log("Connect Wallet button clicked");

  if (typeof window.ethereum !== 'undefined') {
    console.log("MetaMask is installed");

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const userAddress = accounts[0];
      document.getElementById('userAddress').innerText = userAddress;
      console.log("User address:", userAddress);
    } catch (error) {
      console.error('User rejected the request:', error);
    }
  } else {
    console.log("MetaMask is not installed");
    alert('MetaMask is not installed. Please install it to use this app.");
  }
});
