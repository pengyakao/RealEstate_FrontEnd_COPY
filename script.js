// 頁籤多選項目
function showContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tabs button');

    contents.forEach(content => content.style.display = 'none');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).style.display = 'flex';
    document.querySelector(`.tabs button[onclick="showContent('${tabId}')"]`).classList.add('active');
    }

function resetSelection() {
    const checkboxes = document.querySelectorAll('.region input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    }