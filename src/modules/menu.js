const foodList = [];

class Food {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    register() {
        foodList.push(this);
    }
}

// Some registries of food items to populate.
const food1 = new Food("Pancakes", "Pancakes description! Yum yum... 😋").register();
const food2 = new Food("Lasagna", "Lasagna description! Yum yum... 😋").register();
const food3 = new Food("Hamburger", "Hamburguer description! Yum yum... 😋").register();
const food4 = new Food("Pizza", "Pizza description! Yum yum... 😋").register();
const food5 = new Food("Cookie", "Cookie description! Yum yum... 😋").register();
const food6 = new Food("Pasta", "Pasta description! Yum yum... 😋").register();

function renderMenu() {
    const menuContent = document.createElement('div');
    menuContent.innerHTML = "";
    menuContent.id = 'menuContent';

    foodList.forEach(foodItem => {
        const foodDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodDescription = document.createElement('p');
        
        foodDiv.classList.add("food-div");
        foodName.classList.add("food-name");
        foodDescription.classList.add("food-description");

        foodName.innerText = foodItem.name;
        foodDescription.innerText = foodItem.description;

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodDescription);

        menuContent.appendChild(foodDiv);
    });

    return menuContent;
}

export default renderMenu;