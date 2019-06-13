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

