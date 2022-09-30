

let form = document.forms.todo
let container = document.querySelector('.container')
let todos = [
    {
        id: 1,
        task: " Владимир Путин   ",
        yearr: '58'
    },
    {
        id: 2,
        task: "Joe  Biden",
        yearr: '63'
    }

]

const reload = (arr) => {
    container.innerHTML = ""
    let count = 1
    let yeaar = new Date().getFullYear()
    for (let item of arr) {
        let div = document.createElement('div')
        let topDiv = document.createElement('div')
        let img = document.createElement('img')
        let changeBtn = document.createElement('img')
        let span = document.createElement('span')
        // let yearr = document.querySelector('.task2')
        let time = document.createElement('time')
        let ii = document.createElement('div')
        let nmb = document.createElement('div')
        let year = document.createElement('div')
        let inp_n = document.createElement('input')
        let inp_n2 = document.createElement('input')
        let bbt = document.createElement('button')

        if (item.isDone === true) {
            // div.classList.add('done')
        }
        div.classList.add('item')
        topDiv.classList.add('top')
        //  let sss = count
        span.innerHTML = item.task
        year.innerHTML = yeaar - item.yearr

        nmb.innerHTML = count
        // console.log(year);

        year.classList.add('year')
        changeBtn.classList.add('changeBtn')
        ii.classList.add('ii')
        img.src = "./trash-2\ \(1\).svg  "
        changeBtn.src = "./edit.svg"

        ////  izmeneniya
        inp_n.classList.add('inp_n')
        inp_n2.classList.add('inp_n2')
        bbt.classList.add('bbt')
        bbt.innerHTML = 'Save'
        //
        ii.append(changeBtn, img)
        topDiv.append(nmb, span, year, inp_n, inp_n2, bbt, ii)
        div.append(topDiv)
        container.append(div)
        // console.log(year);

        img.onclick = () => {
            todos = todos.filter(elem => elem.task !== item.task)

            reload(todos)
        }
        span.onclick = () => {
            item.isDone = !item.isDone

            console.log(reload(todos));
        }


        count++


        changeBtn.onclick = () => {
            inp_n.value = item.task
            inp_n2.value = item.yearr
            inp_n.style.display = 'block'
            inp_n2.style.display = 'block'
            bbt.style.display = 'block'
            span.style.opacity = '0'
            year.style.opacity = '0'
            img.style.opacity = '0'
            changeBtn.style.opacity = '0'
        }


        bbt.onclick = () => {

            item.task = inp_n.value
            item.yearr = inp_n2.value
            inp_n.style.opacity = '0'
            inp_n2.style.opacity = '0'
            bbt.style.opacity = '0'
            setTimeout(() => {
                img.style.opacity = '1'
                changeBtn.style.opacity = '1'
            }, 100);

            reload(todos)


        }

    }

}

form.onsubmit = (e) => {
    e.preventDefault()

    let task = {



    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    todos.push(task)




    reload(todos)


}


reload(todos)




