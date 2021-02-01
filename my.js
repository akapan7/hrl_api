function testGS(){
    const url="https://script.googleusercontent.com/macros/echo?user_content_key=pCDMDpNI0zDUf4nE0QVxsGipiNTrpmmRHYXA5_wzC_usz4zp2fFSkXiMGyt9b1LCad9FCUI_rb9OakR6uKkiq6fHSYhQhjjRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDtb5_T1RZVtTxinwTzwhvzQEvAiwlGUft_3zeBWiGQeLWE6Ldb6_EC_C_Cmm0G7MaWA6pNeGCYpvJsw0wqpxiI&lib=MuWZCVXv4_OE-uDPJk-NKqra_wHJ5sJzU"
    fetch(url).then(d => d.json())
    .then(d => {
      document.getElementById("app").textContent= d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",testGS);

