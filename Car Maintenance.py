import PySimpleGUI as sg

# Defines the theme for the app
sg.theme('DarkAmber')

# Defines the layout for the Account Creation page
account_creation_layout = [
    [sg.Text('Please create an account')],
    [sg.Text('Username'), sg.InputText(key='Username')],
    [sg.Text('Password'), sg.InputText(password_char='*', key='Password')],
    [sg.Button('Create Account'), sg.Button('Exit')]
]

# Defines the layout for the Vehicle Profile Creation page, initially hidden
vehicle_profile_creation_layout = [
    [sg.Text('Welcome!', key='WelcomeMessage', size=(20, 1), font=('Helvetica', 16))],
    [sg.Text('Create Vehicle Profile')],
    [sg.Text('Year'), sg.InputText(key='Year')],
    [sg.Text('Make'), sg.InputText(key='Make')],
    [sg.Text('Model'), sg.InputText(key='Model')],
    [sg.Text('Car Mileage'), sg.InputText(key='Mileage')],
    [sg.Button('Submit Vehicle Profile'), sg.Button ('Back to Account Creation')]
]

# Defines the layout for the Home page, initially hidden
home_layout = [
    [sg.Text('To Do List')],
    [sg.Listbox(values=['Check Brakes', 'Change Oil', 'Check Tires'], size=(30, 3), key='ToDoList')],
    [sg.Button('Plan Ahead', key='PlanAhead'), sg.Button('Service History')]
]

# Defines the layout for the Cost Estimation page, initially hidden
cost_estimation_layout = [
    [sg.Text('Enter the expected cost for the service:', key='CostText')],
    [sg.Text('Service:'), sg.Combo(['Check Brakes', 'Change Oil', 'Check Tires'], key='Service')],
    [sg.Text('Estimated Cost'), sg.InputText(key='EstimatedCost')],
    [sg.CalendarButton('Select Service Date', target='ServiceDateDisplay', key='ServiceDateButton'), sg.Text('', key='ServiceDateDisplay', size=(15, 1))],
    [sg.Button('Submit Cost', key='SubmitCost'), sg.Button('Back to Home', key='BackToHomeFromCost')]
]


# The layout that combines account creation, vehicle profile creation, and home page
layout = [
    [sg.Column(account_creation_layout, key='-ACCOUNT_CREATION-')],
    [sg.Column(vehicle_profile_creation_layout, visible=False, key='-VEHICLE_CREATION-')],
    [sg.Column(home_layout, visible=False, key='-HOME-')],
    [sg.Column(cost_estimation_layout, visible=False, key='-COST_ESTIMATION-')]
]

# Creates the Window
window = sg.Window('Car Maintenance Application', layout, size=(1500, 1000))  # Adjusted size

# Event loop to process events and get the values of the inputs
while True:
    event, values = window.read()
    if event == 'PlanAhead':
        # Hide other layouts
        window['-HOME-'].update(visible=False)
        # Show the cost estimation layout with the calendar and cost input
        window['-COST_ESTIMATION-'].update(visible=True)
    # Other event handling...
    if event == sg.WIN_CLOSED:
        break

    if event == 'Create Account':
        username = values['Username']
        password = values['Password']
        if username and len(password) >= 4:
            # Show the Welcome message and the Vehicle Profile Creation page
            window['WelcomeMessage'].update(f"Welcome {username}!")
            window['-ACCOUNT_CREATION-'].update(visible=False)
            window['-VEHICLE_CREATION-'].update(visible=True)
        else:
            sg.popup('Error', 'Username and a password of at least 4 characters are required.')

    if event == 'Submit Vehicle Profile':
        # Validate vehicle profile information
        if all(values[key] for key in ['Year', 'Make', 'Model', 'Mileage']):
            # Show the Home page
            window['-VEHICLE_CREATION-'].update(visible=False)
            window['-HOME-'].update(visible=True)
        else:
            sg.popup('Error', 'All fields must be completed')

if event == 'Back to Account Creation':
    # Show the Account Creation page and hide the Vehicle Profile Creation page
        window['-VEHICLE_CREATION-'].update(visible=False)
        window['-ACCOUNT_CREATION-'].update(visible=True)


# When 'Plan Ahead' is clicked, move to the cost estimation page
if event == 'PlanAhead' and window['-HOME-'].visible:
    selected_service = values['ToDoList'][0] if values['ToDoList'] else None
    if selected_service:
        window['-HOME-'].update(visible=False)
        window['CostText'].update(f'Enter the expected cost for {selected_service}:')
        window['-COST_ESTIMATION-'].update(visible=True)
        window.size = (400, 300)  # Adjust the window size

# When 'Submit Cost' is clicked, capture the cost and selected date, and move back to the home page
    if event == 'SubmitCost':
        estimated_cost = values['EstimatedCost']
        selected_service = values['Service']
        service_date = values['ServiceDateDisplay']
        if estimated_cost and selected_service and service_date:
            sg.popup(f'Service: {selected_service}, Cost: {estimated_cost}, Date: {service_date}')
            # Here you would typically save this data to a file or database
            # Reset the form or move to another page as needed
            window['-COST_ESTIMATION-'].update(visible=False)
            window['-HOME-'].update(visible=True)
        else:
            sg.popup_error('Please fill out all fields.')

# Handling back button from Cost Estimation page
    if event == 'BackToHomeFromCost':
        window['-COST_ESTIMATION-'].update(visible=False)
        window['-HOME-'].update(visible=True)
window.close()
