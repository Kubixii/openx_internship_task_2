/* eslint-disable react/jsx-pascal-case */

import { fireEvent, render, screen } from '@testing-library/react';

import Task_2 from './Task_2';

test('tests successful and unsuccessful login attempts', () => {
    render(<Task_2 />);
    const DATASET_SUCCESS = [
        {
            'login': 'user1',
            'password': 'pwd'
        },
        {
            'login': 'user123',
            'password': 'pwd'
        },
        {
            'login': 'user541',
            'password': 'pwd'
        }
    ]

    const DATASET_FAILED = [
        {
            'login': '',
            'password': ''
        },
        {
            'login': '',
            'password': 'pwd'
        },
        {
            'login': 'user622',
            'password': 'pwds'
        }
    ]

    const feedbackMsg = screen.getByTestId('feedbackMsg')
    const login = screen.getByTestId('login')
    const password = screen.getByTestId('password')
    const button = screen.getByTestId('button')

    const FEEDBACK_MESSAGES = {
        INVALID_US_PS: "Invalid username/password",
        LOGIN_SUCCESS: "Welcome, ",
        LOGGED_OUT: 'User logged out.'
    }

    //TEST FOR SUCCESSFUL ATTEMPTS
    DATASET_SUCCESS.forEach(element => {
        fireEvent.change(login, { target: { value: element.login } })
        fireEvent.change(password, { target: { value: element.password } })
        fireEvent.click(button)
        const SUCCESFULL_FEEDBACK = FEEDBACK_MESSAGES.LOGIN_SUCCESS + element.login + "!"

        expect(feedbackMsg.textContent).toBe(SUCCESFULL_FEEDBACK)

        fireEvent.click(button)
        expect(feedbackMsg.textContent).toBe(FEEDBACK_MESSAGES.LOGGED_OUT)

    })

    //TEST FOR FAILED ATTEMPTS
    DATASET_FAILED.forEach(element => {
        fireEvent.change(login, { target: { value: element.login } })
        fireEvent.change(password, { target: { value: element.password } })
        fireEvent.click(button)

        expect(feedbackMsg.textContent).toBe(FEEDBACK_MESSAGES.INVALID_US_PS)
        expect(login).toHaveValue('')
        expect(password).toHaveValue('')
    })
});
