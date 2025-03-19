const left_bar = document.querySelector('.side-bar');

document.querySelector('.hamburger').addEventListener('click', () => {
    left_bar.style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', () => {
    left_bar.style.display = 'none';
})

const darkmode = document.querySelector('.dark-mode');

darkmode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables')
    darkmode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkmode.querySelector('span:nth-child(2)').classList.toggle('active');
})

const courses = [
    {
        productName:'HTML Crash Course',
        productNumber:85743,
        paymentdetail: 'Due',
        status:'Pending'
    },
    {
        productName:'Css Full Course',
        productNumber:85744,
        paymentdetail: 'Refuned',
        status:'Declined'
    },
    {
        productName:'Javascript Tutorial',
        productNumber:85745,
        paymentdetail: 'Paid',
        status:'Active'
    }
]

courses.forEach(course =>{
    const tr = document.createElement('tr');
    const trContent = `
    <td>${course.productName}</td>
    <td>${course.productNumber}</td>
    <td>${course.paymentdetail}</td>
    <td class = "${course.status=='Declined' ? 'danger':course.status=='Pending'?'warning':'primary'}">${course.status}</td>
    <td>Details</td>
    `
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
})