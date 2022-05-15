import React, { useState } from 'react';

const Task_1 = () => {

    const [string, setString] = useState<string>('')
    const [substringArray, setsubstringArray] = useState<string[]>([])

    const handleInput = (e: any) => setString(e.target.value)

    const findLongestSubstrings = () => {
        let substringArray: string[] = []
        let tempInputString: string = string

        string.split('').forEach((element, index) => {
            let tempString: string = ''

            tempInputString.split('').forEach(char => {
                if (tempString.indexOf(char) === -1) {
                    tempString += char
                }
                else {
                    substringArray.push(tempString)
                    tempString = ''
                }
            })
            substringArray.push(tempString)
            tempInputString = tempInputString.slice(1, tempInputString.length + 1);

        })
        const uniqueValues = substringArray.filter((string, index) => {
            return substringArray.indexOf(string) === index
        })

        let longestYet = 0

        uniqueValues.map(element => {
            const length = element.length
            if (longestYet < length) longestYet = length
        })

        const longestArray = uniqueValues.filter(element => {
            return element.length === longestYet
        })

        setsubstringArray(longestArray)
    }

    return (
        <div>
            String: <input type="text" value={string} onChange={handleInput} data-testid="input" />
            <button onClick={findLongestSubstrings} data-testid="test-button">TEST</button>
            <p data-testid="result" >{substringArray.toString()}</p>
        </div>
    )
}

export default Task_1