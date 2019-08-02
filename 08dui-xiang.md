# 对象

[JavaScript对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

## 入门示例

```
var person = {
 firstName: "John",
 lastName : "Doe",
 id : 5566,
 fullName : function() {
   return this.firstName + " " + this.lastName;
 }
};
console.log(person.fullName);
console.log(person.fullName());
```

## 构造函数

上面的示例其实是使用了对象初始化器直接创建对象。我们还可以通过创建一个构造函数来定义对象，然后通过new来创建实例。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, owner) {
  this.make = make;
  this.owner = owner;
}

// 为已经定义的对象类型新增属性/方法
Car.prototype.display = function() {
  console.log("make by " + this.make);
} 

var ming = new Person("ming", 18);
var benz = new Car("benz", ming);
console.log(benz.make);
console.log(benz.owner.name);
benz.display();
```

## 继承

```javascript
function Employee(name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

function Manager(name, dept, reports) {
  Employee.call(this, name, dept);
  this.reports = reports || [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee(name, dept, projects) {
  Employee.call(this, name, dept);
  this.projects = projects || [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson(name, dept, projects, quota) {
  WorkerBee.call(this, name, dept, projects);
  this.dept = dept || 'sales';
  this.quota = quota || 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer(name, dept, projects, machine) {
  WorkerBee.call(this, name, dept, projects);
  this.dept = dept || 'engineering';
  this.machine = machine || '';
}
Engineer.prototype = Object.create(WorkerBee.prototype);

var jim = new Employee("jim");
var sally = new Manager("sally");
var mark = new WorkerBee("mark");
var fred = new SalesPerson("fred");
var jane = new Engineer("jane");
```

上面这个例子很好的说明了JavaScript中的继承。其中有一个注意事项，就是在构造函数中，我们需要调用父类的构造函数，并且在构造函数外面，我还需要显示的设置prototype等于父类的prototype。

```javascript
function Employee(name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}
Employee.prototype.age = 18;

function Manager(name, dept, reports) {
  Employee.call(this, name, dept);
  this.reports = reports || [];
}

var sally = new Manager("sally");
console.log("before set prototype: " + sally.age); // => undefined

Manager.prototype = Object.create(Employee.prototype);

sally = new Manager("sally");
console.log("after set prototype: " + sally.age); // => 18
```

上述代码说明，在继承的时候，如果只是在构造函数中调用父类的构造函数，那么只能继承父类构造函数中指定的属性。
只有显示的设置prototype之后，才能确保动态的继承，也就是说父类后续添加的属性也都能继承。

## 本地值和继承值

```javascript
function Employee () {
  this.name = "";
  this.dept = "general";
}

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;
var emp = new Employee;
console.log("name of amy is: " + amy.name);
console.log("name of emp is: " + emp.name);

Employee.prototype.name = "Unknown"
console.log("name of amy is: " + amy.name);
console.log("name of emp is: " + emp.name);
```

输出

```
name of amy is: 
name of emp is: 
name of amy is:
name of emp is:
```

当我们创建Employee对象的任意实例时，该实例的name属性将获得一个本地值（空字符串）。当创建一个新的Employee对象作为WorkerBee的原型时，WorkerBee.prototype的name属性将具有一个本地值。当Javascript查找amy对象的name属性时，将找到WorkerBee.prototype中的本地值，就不会再向上找Employee.prototype了。

## 原型链查找

JavaScript的属性查找机制将首先在对象自身的属性中查找，如果指定的属性名称没有找到，将在对象的特殊属性```_proto_```中查找。
特殊的属性```_proto_```是在对象创建的时候设置的，设置为构造器的```prototype```属性的值。所以表达式```new Foo()```将创建一个新对象，其```_proto_ = Foo.prototype```。


## 构造器中的全局信息
