const apiData = [
    {
        path: '/api/posts',
        method: 'get',
        description: 'Get featured posts'
    },
    {
        path: '/api/users/:id',
        method: 'get',
        description: 'Retrieve a specific user by ID'
    },
];

const mainTable = document.getElementById("tableId");

apiData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.path}</td>
        <td>
            <span class='${item.method}'>${item.method}</span>
        </td>
        <td>${item.description}</td>
    `;
    row.childNodes[1].onclick = () => {
        copyToClipboard(row.childNodes[1].textContent)
    }
    mainTable.appendChild(row)
})

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // Show the popup
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    popupText.textContent = `Copied: ${text}`;
    popup.classList.add('show');

    // Hide the popup after a delay
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000); // Hide after 2 seconds
}
