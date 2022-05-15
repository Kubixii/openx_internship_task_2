/* eslint-disable react/jsx-pascal-case */

import { fireEvent, render, screen } from '@testing-library/react';

import Task_1 from './Task_1';

test('searches for longest unique-character substring', () => {
    render(<Task_1 />);
    const IO_DATASET = [
        [
            'abcabcbb',
            ['abc', 'bca', 'cab']
        ],
        [
            'bbbbb',
            ['b']
        ],
        [
            'cnfjgjhutbnd',
            ['gjhutbnd']
        ],
        [
            'qppqqllla',
            ['qp', 'la', 'pq', 'ql']
        ],
        [
            'dfheuekfmcmk',
            ['uekfmc']
        ],
        [
            'qwertasdfgtrqws',
            ['qwertasdfg']
        ],
        [
            'fghjmghjgfhg',
            ['fghjm']
        ],
        [
            'sdffsdddffds',
            ['sdf', 'fsd', 'fds']
        ],
        [
            'bbbbb',
            ['b']
        ]
    ]

    const input = screen.getByTestId('input')
    const button = screen.getByTestId('test-button')


    IO_DATASET.forEach(element => {
        fireEvent.change(input, { target: { value: element[0] } })
        fireEvent.click(button)
        const result = screen.getByTestId('result')
        expect(result.textContent).toBe(element[1].toString())
    })
});
