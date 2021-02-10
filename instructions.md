# Meeting 2

How to interact with the API in python?

1. Go to terminal
2. type in terminal: 

  pip install requests

    ![Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-03_at_14.43.17.png](Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-03_at_14.43.17.png)

3. type in terminal:

    python

4. You must see ">>>” in the IDE, so type:

    import requests

![Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-03_at_14.44.23.png](Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-03_at_14.44.23.png)

5. type in terminal:

import pprint

If you see any errors, install with "pip install pprint” and then go to step 5.

6. type in terminal:

api="[https://script.google.com/macros/s/AKfycbyVJ1atQPDr7J_SmlrveoZsI0nqXtxVnThOjrx165pUh-rnif9BablI/exec](https://script.google.com/macros/s/AKfycbyVJ1atQPDr7J_SmlrveoZsI0nqXtxVnThOjrx165pUh-rnif9BablI/exec)"

![Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.30.30.png](Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.30.30.png)

This api variable points to the Web API key

7. type in terminal:

r=requests.get(api) 

8. type in terminal:

r.json()

Now you must see the complete json output

![Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.33.14.png](Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.33.14.png)

9. To access the needed data within the json output, type in terminal:

r.json()[0]['data']

A full screenshot of the commands: 

![Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.32.45.png](Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.32.45.png)

Additionally, to clean the console type: 

![Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.58.55.png](Meeting%202%2037cc97d4d0b049a98db9aa20bb4c9685/Screen_Shot_2021-02-09_at_11.58.55.png)