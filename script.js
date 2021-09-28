function Modal(props) {
  /*
  props.name
  */
  return /*#__PURE__*/(
    React.createElement("div", { className: "modal fade", id: props.name,
      tabindex: "-1", role: "dialog",
      "aria-labelledby": "modalFormLabel",
      "aria-hidden": "true" }, /*#__PURE__*/
    React.createElement("div", { className: "modal-dialog", role: "document" }, /*#__PURE__*/
    React.createElement("div", { className: "modal-content" },
    props.children))));




}

function ModalHeader(props) {
  /* props{
  	title
  	onClose
  }*/
  return /*#__PURE__*/(
    React.createElement("div", { className: "modal-header" }, /*#__PURE__*/
    React.createElement("h5", { className: "modal-title" }, props.title), /*#__PURE__*/
    React.createElement("button", { type: "button", className: "close", onClick: props.onClose }, /*#__PURE__*/
    React.createElement("span", { "aria-hidden": "true" }, "\xD7"))));



}

function ModalFooter(props) {
  /* props{
  	onSave
  	onClose
  	onEdit
  	onDelete
  }*/

  return /*#__PURE__*/(
    React.createElement("div", { className: "modal-footer" },
    props.onClose && /*#__PURE__*/React.createElement("button", { type: "button", className: "btn btn-primary btn-md", onClick: props.onClose }, "Close"),
    props.onSave && /*#__PURE__*/React.createElement("button", { type: "button", className: "btn btn-primary btn-md", onClick: props.onSave }, "Save"),
    props.onEdit && /*#__PURE__*/React.createElement("button", { type: "button", className: "btn btn-primary btn-md", onClick: props.onEdit }, "Edit"),
    props.onDelete && /*#__PURE__*/React.createElement("button", { type: "button", className: "btn btn-primary btn-md", onClick: props.onDelete }, "Delete")));


}

class ModalEditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: "",
      item_category: "",
      item_cuisine: "",
      item_preptime: "",
      item_ingredient: [],
      item_instruction: "",
      item_imageurl: "" };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      item_name: nextProps.recipeDetail.name,
      item_category: nextProps.recipeDetail.category,
      item_cuisine: nextProps.recipeDetail.cuisine,
      item_preptime: nextProps.recipeDetail.preptime,
      item_ingredient: nextProps.recipeDetail.ingredient,
      item_instruction: nextProps.recipeDetail.instruction,
      item_imageurl: nextProps.recipeDetail.imageurl });


    this.id = nextProps.recipeId;
  }

  handleInputChange(event) {
    var id = event.target.id;
    this.setState({ [id]: event.target.value });
  }

  handleIngredientChange(event) {
    var ingArray = this.state.item_ingredient;
    var eventTarget = event.target;

    var value = eventTarget.value;
    var index = eventTarget.id;

    ingArray[index] = value;
    this.setState({
      item_ingredient: ingArray });

  }

  addIngredient() {
    var ingList = this.state.item_ingredient;
    ingList = ingList.concat(" ");
    this.setState({
      item_ingredient: ingList });


  }

  onSave() {
    var newrecipe = {};
    newrecipe.name = this.state.item_name;
    newrecipe.category = this.state.item_category;
    newrecipe.cuisine = this.state.item_cuisine;
    newrecipe.preptime = this.state.item_preptime;
    newrecipe.ingredient = this.state.item_ingredient.filter(val => {return val && val !== " ";});
    newrecipe.instruction = this.state.item_instruction;
    newrecipe.imageurl = this.state.item_imageurl;

    this.props.onSave(this.id, newrecipe);
    this.closeModal();
  }

  closeModal() {
    this.setState({
      item_name: "",
      item_category: "",
      item_cuisine: "",
      item_preptime: "",
      item_ingredient: [],
      item_instruction: "",
      item_imageurl: "" });

    $("#editModal").modal("hide");
    this.props.closeModal();
  }

  render() {
    var ingList = this.state.item_ingredient.map((value, index) => {
      return value && /*#__PURE__*/
      React.createElement("li", { key: index }, /*#__PURE__*/
      React.createElement("input", { name: "item_ingredient",
        value: value,
        id: index,
        placeholder: "Add Ingredient here",
        onChange: ev => this.handleIngredientChange(ev) }));

    });

    return /*#__PURE__*/(
      React.createElement(Modal, { name: "editModal" }, /*#__PURE__*/
      React.createElement("div", { className: "modal-header" }, /*#__PURE__*/
      React.createElement("input", { className: "modal-title", id: "item_name", value: this.state.item_name, onChange: ev => this.handleInputChange(ev) }), /*#__PURE__*/
      React.createElement("button", { type: "button", className: "close", onClick: () => this.closeModal() }, /*#__PURE__*/
      React.createElement("span", { "aria-hidden": "true" }, "\xD7"))), /*#__PURE__*/



      React.createElement("div", { className: "modal-body" }, /*#__PURE__*/
      React.createElement("div", { className: "details" }, /*#__PURE__*/
      React.createElement("div", { className: "details-left" }, /*#__PURE__*/
      React.createElement("h6", null, "Category: ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("input", { id: "item_category", value: this.state.item_category, onChange: ev => this.handleInputChange(ev) }))), /*#__PURE__*/
      React.createElement("h6", null, "Prep Time: ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("input", { id: "item_preptime", value: this.state.item_preptime, onChange: ev => this.handleInputChange(ev) })))), /*#__PURE__*/

      React.createElement("div", { className: "details-right" }, /*#__PURE__*/
      React.createElement("h6", null, " Cuisine : ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("input", { id: "item_cuisine", value: this.state.item_cuisine, onChange: ev => this.handleInputChange(ev) }))))), /*#__PURE__*/



      React.createElement("div", { className: "midpane" }, /*#__PURE__*/
      React.createElement("div", { className: "ingredients" }, /*#__PURE__*/
      React.createElement("h5", null, "Ingredients"), /*#__PURE__*/
      React.createElement("ul", null,
      ingList), /*#__PURE__*/

      React.createElement("a", { className: "btn-floating btn-small waves-effect waves-light", onClick: () => this.addIngredient() }, /*#__PURE__*/
      React.createElement("i", { className: "material-icons" }, "add"))), /*#__PURE__*/


      React.createElement("div", { className: "image" }, /*#__PURE__*/
      React.createElement("img", { src: this.state.item_imageurl }), /*#__PURE__*/
      React.createElement("h6", null, "Image URL : ", /*#__PURE__*/React.createElement("input", { id: "item_imageurl", value: this.state.item_imageurl, onChange: ev => this.handleInputChange(ev) })))), /*#__PURE__*/



      React.createElement("div", { className: "instructions" }, /*#__PURE__*/
      React.createElement("h5", null, "Instructions: "), /*#__PURE__*/
      React.createElement("textarea", { id: "item_instruction", onChange: ev => this.handleInputChange(ev), value: this.state.item_instruction }))), /*#__PURE__*/



      React.createElement(ModalFooter, { onSave: () => this.onSave(),
        onClose: () => this.closeModal() })));


  }}


class ModalShowRecipe extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal() {
    $("#showModal").modal("hide");
    this.props.closeModal();
  }

  onDelete() {
    this.closeModal();
    this.props.deleteRecipe(this.props.recipeId);
  }

  onEdit() {
    this.closeModal();
    this.props.openEdit(this.props.recipeId);
  }

  render() {
    var recipe = this.props.recipeDetail;
    var recipeId = this.props.recipeId;

    var ingList = recipe.ingredient.map(ing => {
      return /*#__PURE__*/React.createElement("li", null, ing);
    });

    return /*#__PURE__*/(
      React.createElement(Modal, { name: "showModal" }, /*#__PURE__*/
      React.createElement(ModalHeader, { title: recipe.name,
        onClose: () => this.closeModal() }), /*#__PURE__*/
      React.createElement("div", { className: "modal-body" }, /*#__PURE__*/
      React.createElement("div", { className: "details" }, /*#__PURE__*/
      React.createElement("div", { className: "details-left" }, /*#__PURE__*/
      React.createElement("h6", null, "Category:", /*#__PURE__*/React.createElement("span", null, " ", recipe.category, " ")), /*#__PURE__*/
      React.createElement("h6", null, "Prep Time: ", /*#__PURE__*/React.createElement("span", null, " ", recipe.preptime, " "))), /*#__PURE__*/

      React.createElement("div", { className: "details-right" }, /*#__PURE__*/
      React.createElement("h6", null, " Cuisine : ", /*#__PURE__*/React.createElement("span", null, " ", recipe.cuisine, " ")))), /*#__PURE__*/



      React.createElement("div", { className: "midpane" }, /*#__PURE__*/
      React.createElement("div", { className: "ingredients" }, /*#__PURE__*/
      React.createElement("h5", null, "Ingredients"),
      ingList), /*#__PURE__*/

      React.createElement("div", { className: "image" }, /*#__PURE__*/
      React.createElement("img", { src: recipe.imageurl }))), /*#__PURE__*/



      React.createElement("div", { className: "instructions" }, /*#__PURE__*/
      React.createElement("h5", null, "Instructions: "), /*#__PURE__*/
      React.createElement("p", null, recipe.instruction))), /*#__PURE__*/


      React.createElement(ModalFooter, { onClose: () => this.closeModal(),
        onEdit: () => this.onEdit(),
        onDelete: () => this.onDelete() })));


  }}


class ModalAddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: "",
      item_category: "",
      item_cuisine: "",
      item_preptime: "",
      item_ingredient: [],
      item_instruction: "",
      item_imageurl: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleIngredientChange(event) {
    var ingArray = event.target.value.split(",");
    this.setState({ item_ingredient: ingArray });
  }

  handleInputChange(event) {
    var id = event.target.id;
    this.setState({ [id]: event.target.value });
  }

  saveRecipe() {
    var newrecipe = {};
    newrecipe.name = this.state.item_name;
    newrecipe.category = this.state.item_category;
    newrecipe.cuisine = this.state.item_cuisine;
    newrecipe.preptime = this.state.item_preptime;
    newrecipe.ingredient = this.state.item_ingredient.filter(val => {return val && val !== " ";});
    newrecipe.instruction = this.state.item_instruction;
    newrecipe.imageurl = this.state.item_imageurl;

    this.props.saveRecipe(newrecipe);
    this.closeModal();
  }

  closeModal() {
    this.setState({
      item_name: "",
      item_category: "",
      item_cuisine: "",
      item_preptime: "",
      item_ingredient: [],
      item_instruction: "",
      item_imageurl: "" });

    $("#addModal").modal("hide");
    this.props.closeModal();
  }

  render() {
    //	console.log(" Add MODAL: render");
    return /*#__PURE__*/(
      React.createElement(Modal, { name: "addModal" }, /*#__PURE__*/
      React.createElement(ModalHeader, { title: "Add Your New Recipe", onClose: () => this.closeModal() }), /*#__PURE__*/
      React.createElement("div", { className: "modal-body" }, /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("input", { id: "item_name", type: "text", value: this.state.item_name, onChange: this.handleInputChange }), /*#__PURE__*/
      React.createElement("label", { for: "recipename" }, "Name of your Dish")), /*#__PURE__*/

      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("input", { id: "item_imageurl", placeholder: "Image URL here", type: "url", className: "validate", value: this.state.item_imageurl, onChange: this.handleInputChange }), /*#__PURE__*/
      React.createElement("label", { for: "imageurl" }, "Tempt with an image")), /*#__PURE__*/

      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("input", { id: "item_category", type: "text", value: this.state.item_category, onChange: this.handleInputChange }), /*#__PURE__*/
      React.createElement("label", { for: "category" }, "Dish's Category")), /*#__PURE__*/

      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("input", { id: "item_cuisine", type: "text", value: this.state.item_cuisine, onChange: this.handleInputChange }), /*#__PURE__*/
      React.createElement("label", { for: "cuisine" }, "What Cuisine")), /*#__PURE__*/

      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("input", { id: "item_preptime", type: "text", value: this.state.item_preptime, onChange: this.handleInputChange }), /*#__PURE__*/
      React.createElement("label", { for: "preptime" }, "Cooking Time")), /*#__PURE__*/

      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("textarea", { id: "item_ingredient", className: "materialize-textarea", placeholder: "Seperate Ingredients by Comma", value: this.state.item_ingredient, onChange: this.handleIngredientChange }), /*#__PURE__*/
      React.createElement("label", { for: "ingredient" }, "Ingredients")), /*#__PURE__*/

      React.createElement("div", { className: "input-field" }, /*#__PURE__*/
      React.createElement("textarea", { id: "item_instruction", className: "materialize-textarea", placeholder: "Secret Recipe ", value: this.state.item_instruction, onChange: this.handleInputChange }), /*#__PURE__*/
      React.createElement("label", { for: "instruction" }, "Directions")))), /*#__PURE__*/



      React.createElement(ModalFooter, { onSave: () => this.saveRecipe(), onClose: () => this.closeModal() })));


  }}


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.recipeId;
    this.recipe = this.props.recipe;
  }

  componentWillReceiveProps(props) {
    this.id = props.recipeId;
    this.recipe = props.recipe;
  }

  render() {
    var recipe = this.recipe;
    var recipeId = this.id;
    var showCuisine = recipe.cuisine ? true : false;
    var showCategory = recipe.category ? true : false;
    var showPreptime = recipe.preptime ? true : false;
    return /*#__PURE__*/(
      React.createElement("div", { className: "item", onClick: () => this.props.openDetail(recipeId) }, /*#__PURE__*/
      React.createElement("img", { src: recipe.imageurl }), /*#__PURE__*/
      React.createElement("div", { className: "name" }, " ", recipe.name, " "),
      showCuisine && /*#__PURE__*/React.createElement("div", { className: "cuisine" }, " ", recipe.cuisine, " "),
      showCategory && /*#__PURE__*/React.createElement("span", { className: "category" }, " ", recipe.category, " "),
      showPreptime && /*#__PURE__*/React.createElement("span", { className: "preptime" }, " ", recipe.preptime, " ")));


  }}


class AppBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var recipeArray = this.props.recipeArray;
    var recipeList = recipeArray.map((recipe, index) => {
      return /*#__PURE__*/React.createElement(Recipe, { deleteRecipe: id => this.props.deleteRecipe(id),
        recipe: recipe,
        key: index,
        recipeId: index,
        openDetail: id => this.props.openDetail(id) });
    });

    return /*#__PURE__*/(
      React.createElement("div", { className: "body" }, /*#__PURE__*/
      React.createElement("div", { className: "recipe-container" },
      recipeList)));



  }}


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*
    return (
    	<div>
    		<div>Title</div>
    		<button onClick={this.props.openNewForm}>Add New Recipe </button>
    	</div>
    );*/

    return /*#__PURE__*/(
      React.createElement("div", { className: "header clearfix" }, /*#__PURE__*/
      React.createElement("h4", null, "Recipe Box"), /*#__PURE__*/
      React.createElement("a", { className: "btn-floating btn-large waves-effect waves-light",
        onClick: this.props.openNewForm }, /*#__PURE__*/
      React.createElement("i", { className: "material-icons" }, "add"))));




  }}


class App extends React.Component {
  constructor() {
    super();
    var initialRecipes = this.getRecipeList();
    this.state = {
      recipeArray: initialRecipes,
      activeModal: "", /* Wont be used till Bootstrap Modals is used */
      currId: 0,
      currRecipe: {
        name: "",
        category: "",
        cuisine: "",
        preptime: "",
        imageurl: "",
        ingredient: [],
        instruction: "" } };


  }

  getDefaultRecipes() {
    var recipeList = [
    {
      name: "Strawberry Vanilla Cake",
      category: "dessert",
      cuisine: "continental",
      preptime: "3 hours",
      ingredient: ["1 1/2 cups cake flour", "1/2 Tbsp baking powder", "1/2 tsp fine sea salt", "1/2 cup whole milk", "3 large egg whites", "1 tsp vanilla extract", "6 Tbsp unsalted butter, softened", "3/4 cup granulated sugar"],
      instruction: "Preheat oven to 350 degrees F. Butter and lightly flour a 5-inch cake pan (at least 3 inches tall). Line bottom with parchment paper. Set aside.Sift together cake flour, baking powder, and salt.Set aside. In another bowl, whisk together milk, egg whites, and vanilla. Set aside.In the bowl of a stand mixer, beat butter until smooth. Add sugar and mix until combined. Scrape down bowl as needed to ensure even mixing. Add 1/3 of the dry ingredients. Mix on low speed while adding 1/2 of the liquid ingredients. Add another 1/3 of dry, follow with remaining liquid ingredients and end with dry ingredients.  Mix until batter is evenly combined.Spoon batter into prepared cake pan. Level off the top. Bake for 60 minutes, rotating pan midway through baking. If top of cake is browning too much, cover with foil tent. Bake until toothpick inserted in center of cake comes out clean. Cake batter will rise slightly over the 3-inch cake pan.  Let cool in pan for 5 minutes before unmolding. Allow to cool to room temperature on wire rack.Once cake is cool, use a serrated knife to slice off excess muffin top.  Divide cake into three even layers.",
      imageurl: "http://cf.thelittleepicurean.com/wp-content/uploads/2015/04/strawberry-vanilla-cake-4.jpg" },

    {
      name: "Mango Pudding",
      category: "dessert",
      cuisine: "continental",
      preptime: "1 hour",
      ingredient: ["2 1/2 cups cold water", "1 1/4 cups granulated sugar", "1 pound frozen mango chunks", "2 (1/4-ounce) packets unflavored gelatin", "1/2 teaspoon kosher salt", "1 cup heavy cream", "chilled 1 teaspoon freshly squeezed lime juice"],
      instruction: "Place 8 (6-ounce) ramekins on a baking sheet; set aside. Place 3/4 cup of the water and 1/2 cup of the sugar in a small saucepan over high heat. Stir until sugar is dissolved and mixture is boiling, about 3 minutes. Remove from heat. Place mango in a blender, pour in sugar mixture, and blend on medium-high until very smooth, about 1 minute. Pour through a fine mesh strainer set over a medium bowl and, using a rubber spatula, work the mixture through the strainer, discarding any pulp or stringy fibers. Measure 2 cups of the purée (reserve any extra purée for another use); set aside.Place 1 1/4 cups of the remaining water in a small saucepan over high heat and bring to a boil. Meanwhile, place the remaining 3/4 cup sugar, gelatin, and salt in a large mixing bowl, add remaining 1/2 cup water, and whisk to incorporate, about 30 seconds. Add boiling water and whisk until gelatin and sugar are dissolved, about 1 minute.Add the 2 cups of mango purée, cream, and lime juice and whisk until evenly combined. Divide the mixture evenly among the ramekins and refrigerate until set, at least 2 hours.",
      imageurl: "http://media1.sailusfood.com/wp-content/uploads/2016/04/mango-pudding-agar-agar.jpg" },

    {
      name: "Poached salmon with sweet pepper & basil sauce",
      imageurl: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1274452_8.jpg?itok=rrBdQalN" },

    {
      name: "Pan fried Chicken with Miso Marinade",
      imageurl: "https://media1.agfg.com.au/images/recipes/389/hero-300.jpg" },

    {
      name: "Pina Colada Cupcakes",
      imageurl: "https://www.dessertnowdinnerlater.com/wp-content/uploads/2015/03/Pina-Colada-Cupcakes-2.jpg" },

    {
      name: "Piquant Garlic Prawns",
      imageurl: "http://www.kenwoodworld.com/Global/recipes/Recipe%20Images/fish/piquant_garlic_prawns_1.jpg" }];



    return recipeList;
  }

  getRecipeList() {
    var recipeList = this.getDefaultRecipes();
    if (typeof window.localStorage === "undefined")
    console.log("Your Browser doesnt support Local Storage");else
    {
      if (window.localStorage.RecipeApp)
      recipeList = JSON.parse(window.localStorage.getItem("RecipeApp")).recipeArray;else

      window.localStorage.setItem("RecipeApp", JSON.stringify({ recipeArray: recipeList }));
    }
    return recipeList;
  }

  saveRecipe(recipe) {
    var newarray = this.state.recipeArray;
    newarray = newarray.concat(recipe);
    this.setState({
      recipeArray: newarray });

  }

  saveEditedRecipe(id, recipe) {
    var array = this.state.recipeArray;
    array[id] = recipe;
    this.setState({
      recipeArray: array });

  }

  deleteRecipe(recipeId) {
    var array = this.state.recipeArray;
    array.splice(recipeId, 1);
    this.setState({ recipeArray: array });
  }

  openNewForm() {
    this.setState({ activeModal: "addRecipeModal" });
    /* Modal is triggered by data-attributes */
    $("#addModal").modal("show");

    /*	$("#addModal").on('shown.bs.modal', function () {
       	console.log('The ADD modal is fully shown.');
       });
    */
  }

  openDetail(id) {
    this.setState({
      activeModal: "showRecipeModal",
      currId: id,
      currRecipe: this.state.recipeArray[id] });

    $("#showModal").modal("show");
  }

  openEdit(id) {
    this.setState({
      activeModal: "editRecipeModal",
      currId: id,
      currRecipe: this.state.recipeArray[id] });

    $("#editModal").modal("show");
  }

  closeModal() {
    this.setState({
      activeModal: "" });

  }

  componentDidUpdate() {
    var obj = {
      recipeArray: this.state.recipeArray };

    window.localStorage.setItem("RecipeApp", JSON.stringify(obj));
  }

  render() {
    /* Use this when Bootstrap modal implementation is removed and our own modal design is implemented. 
    var showModalAdd	=	this.state.activeModal === "addRecipeModal"  ? true : false;
    var showModalEdit	=	this.state.activeModal === "editRecipeModal" ? true : false;
    var showModalShow	=	this.state.activeModal === "showRecipeModal" ? true : false;
    */
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement(AppHeader, { openNewForm: () => this.openNewForm() }), /*#__PURE__*/

      React.createElement(AppBody, { recipeArray: this.state.recipeArray,
        deleteRecipe: id => this.deleteRecipe(id),
        openDetail: id => this.openDetail(id) }), /*#__PURE__*/

      React.createElement(ModalAddRecipe, { saveRecipe: recipe => this.saveRecipe(recipe),
        closeModal: () => this.closeModal() }), /*#__PURE__*/

      React.createElement(ModalEditRecipe, { recipeDetail: this.state.currRecipe,
        recipeId: this.state.currId,
        onSave: (id, recipe) => this.saveEditedRecipe(id, recipe),
        closeModal: () => this.closeModal() }), /*#__PURE__*/

      React.createElement(ModalShowRecipe, { recipeId: this.state.currId,
        recipeDetail: this.state.currRecipe,
        deleteRecipe: id => this.deleteRecipe(id),
        openEdit: id => this.openEdit(id),
        closeModal: () => this.closeModal() })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("app"));



//window.localStorage.clear();