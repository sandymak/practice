import { useState } from 'react'
import './TransferList.css'

function TransferList() {
    const LIST_LEFT_INIT = [
        {
            value: 'HTML',
            checked: false,
        },
        {
            value: 'JavaScript',
            checked: false,
        },
        {
            value: 'CSS',
            checked: false,
        },
        {
            value: 'TypeScript',
            checked: false,
        },
    ]
    const LIST_RIGHT_INIT = [
        {
            value: 'React',
            checked: false,
        },
        {
            value: 'Angular',
            checked: false,
        },
        {
            value: 'Vue',
            checked: false,
        },
        {
            value: 'Svelte',
            checked: false,
        },
    ]
    const LIST_TYPE = {
        LEFT: 'LEFT',
        RIGHT: 'RIGHT',
    }

    const BUTTON_TYPE = {
        RIGHT_TO_LEFT_ALL: 'RIGHT_TO_LEFT_ALL',
        RIGHT_TO_LEFT_SOME: 'RIGHT_TO_LEFT_SOME',
        LEFT_TO_RIGHT_ALL: 'LEFT_TO_RIGHT_ALL',
        LEFT_TO_RIGHT_SOME: 'LEFT_TO_RIGHT_SOME',
    }

    /**
     * TODO: Consider moving more logic here so that the context around which button is clicked and how things should be checked is not spread throughout the entire component.
     */
    const BUTTONS = [
        {
            id: BUTTON_TYPE.RIGHT_TO_LEFT_ALL,
            label: '<<',
        },
        {
            id: BUTTON_TYPE.RIGHT_TO_LEFT_SOME,
            label: '<',
        },
        {
            id: BUTTON_TYPE.LEFT_TO_RIGHT_ALL,
            label: '>>',
        },
        {
            id: BUTTON_TYPE.LEFT_TO_RIGHT_SOME,
            label: '>',
        },
    ]

    const [leftList, setLeftList] = useState(LIST_LEFT_INIT)
    const [rightList, setRightList] = useState(LIST_RIGHT_INIT)

    const onItemChecked = (event, index, listType) => {
        const { value, checked } = event.target
        console.log('value=', value, 'checked', checked)
        if (listType === LIST_TYPE.LEFT) {
            let newLeftList = [...leftList]
            newLeftList[index] = { value, checked }
            setLeftList(newLeftList)
        } else {
            let newRightList = [...rightList]
            newRightList[index] = { value, checked }
            setRightList(newRightList)
        }
    }

    const handleTransferList = (event) => {
        const { id } = event.target
        if (id === BUTTON_TYPE.RIGHT_TO_LEFT_ALL) {
            const newLeftList = [...leftList, ...rightList]
            setLeftList(newLeftList)
            setRightList([])
        } else if (id === BUTTON_TYPE.RIGHT_TO_LEFT_SOME) {
            let newRightList = [...rightList]
            const newRightListUnchecked = newRightList.filter(
                ({ checked }) => checked === false
            )
            const newRightListChecked = newRightList.filter(
                ({ checked }) => checked === true
            )
            const newLeftList = [...leftList]
            newLeftList.push(...newRightListChecked)
            setLeftList(newLeftList)
            newRightList = newRightListUnchecked
            setRightList(newRightList)
        } else if (id === BUTTON_TYPE.LEFT_TO_RIGHT_ALL) {
            const newRightList = [...rightList, ...leftList]
            setRightList(newRightList)
            setLeftList([])
        } else if (id === BUTTON_TYPE.LEFT_TO_RIGHT_SOME) {
            let newLeftList = [...leftList]
            const newLeftListUnchecked = newLeftList.filter(
                ({ checked }) => checked === false
            )
            const newLeftListChecked = newLeftList.filter(
                ({ checked }) => checked === true
            )
            const newRightList = [...rightList]
            newRightList.push(...newLeftListChecked)
            setRightList(newRightList)
            newLeftList = newLeftListUnchecked
            setLeftList(newLeftList)
        } else {
            return new Error('Unexpected button id clicked')
        }
    }

    return (
        <div className="transfer-list-wrapper">
            <List
                list={leftList}
                onItemChecked={onItemChecked}
                listType={LIST_TYPE.LEFT}
            />
            <div className="transfer-list-column">
                {BUTTONS.map(({ id, label }) => {
                    const shouldDisableButton = (id) => {
                        if (
                            (id === BUTTON_TYPE.RIGHT_TO_LEFT_ALL &&
                                !rightList.length) ||
                            (id === BUTTON_TYPE.LEFT_TO_RIGHT_ALL &&
                                !leftList.length) ||
                            (id === BUTTON_TYPE.RIGHT_TO_LEFT_SOME &&
                                !rightList.find(
                                    ({ checked }) => checked === true
                                )) ||
                            (id === BUTTON_TYPE.LEFT_TO_RIGHT_SOME &&
                                !leftList.find(
                                    ({ checked }) => checked === true
                                ))
                        )
                            return true
                        return false
                    }
                    return (
                        <div className="transfer-list-item" key={id}>
                            <button
                                type="button"
                                id={id}
                                disabled={shouldDisableButton(id)}
                                onClick={(event) => handleTransferList(event)}
                            >
                                {label}
                            </button>
                        </div>
                    )
                })}
            </div>
            <List
                list={rightList}
                onItemChecked={onItemChecked}
                listType={LIST_TYPE.RIGHT}
            />
        </div>
    )
}

function List({ list, onItemChecked, listType }) {
    return (
        <div className="transfer-list-column">
            <ul className="transfer-list">
                {list.map(({ value, checked }, index) => (
                    <li className="transfer-list-item" key={value}>
                        <input
                            type="checkbox"
                            className="transfer-list-input"
                            id={value}
                            name={value}
                            value={value}
                            onChange={(event) =>
                                onItemChecked(event, index, listType)
                            }
                            checked={checked}
                        />
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransferList
