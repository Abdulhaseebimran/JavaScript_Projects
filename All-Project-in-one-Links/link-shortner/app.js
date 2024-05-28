async function urlShort(){
    let link = document.getElementById("link").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(link)}`);
    if(response.ok){
        const jsonResponse = await response.text();
        document.getElementById("result").innerHTML = `
        <h3>Result:</h3>
        <a href="${jsonResponse}" target="_blank">${jsonResponse}</a>`;
    } else{
        document.getElementById("result").innerHTML = `Error: ${response.status}`;
    }
}