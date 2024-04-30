export default function ShowMessageBox(
    messageBoxTitle: string,
    messageBoxText: string,
    messageBoxTimerMilSecs: number,
    parentElement: HTMLElement
) {
    let messagebox = `<div class="MessageBox">
            <h3 id="messageBoxTitle">Hey</h3>
            <section id="messageBoxText">This is a message</section>
        </div>`;

    console.log(parentElement);
    parentElement.innerHTML = messagebox;
}
