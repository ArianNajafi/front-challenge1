import { useEffect, useState } from "react";
import { getRandoms } from "../funcs/getRndoms";
import './Bord.css'

const Bord = ({ size }) => {
    const [randomList, setRandomList] = useState(getRandoms(size.x * size.y));

    //check that number clickded for move
    const isMove = (clickedNum) => {
        const zeroNum_index = randomList.indexOf(0);
        const clickedNum_index = randomList.indexOf(clickedNum);

        if (clickedNum_index + size.x === zeroNum_index) {
            move(zeroNum_index, clickedNum_index)
        }
        else if (clickedNum_index - size.x === zeroNum_index) {
            move(zeroNum_index, clickedNum_index)
        }
        else if (clickedNum_index + 1 === zeroNum_index) {
            move(zeroNum_index, clickedNum_index)
        }
        else if (clickedNum_index - 1 === zeroNum_index) {
            move(zeroNum_index, clickedNum_index)
        }
    }

    //move numbers
    const move = (zeroNum_index, clickedNum_index) => {
        const newRandomList = [...randomList];
        newRandomList[zeroNum_index] = randomList[clickedNum_index];
        newRandomList[clickedNum_index] = randomList[zeroNum_index];
        setRandomList(newRandomList);
        isSolve(newRandomList)
    }

    //check if game solved
    const isSolve = (newRandomList) => {
        let isSolved = true
        for (let i = 1; i < size.x * size.y; i++) {
            if (newRandomList[i-1] !== i) {
                isSolved = false
            }
        }

        console.log(isSolved);
        if (isSolved){
            setTimeout(()=>{
                alert('you solve the game ♦')
            },100)
        }
    }

    return (
        <div className="bord"
            style={{ gridTemplateColumns: `repeat(${size.x}, 1fr)`, gridTemplateRows: `repeat(${size.y}, 1fr)` }}>
            {
                randomList.map((num) => (
                    <div
                        key={num}
                        onClick={() => isMove(num)}
                        className={num === 0 ? "ziroBox" : "box"}
                    >
                        {num === 0 ? "" : num}
                    </div>
                ))
            }
        </div>);
}

export default Bord;