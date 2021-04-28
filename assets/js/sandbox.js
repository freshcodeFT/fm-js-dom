"use strict";

function testFun() {
  console.log(this);
}

const testObj = {
  foo: "bar",
  sum(a, b) {
    console.log(this);
    //return a + b;
  },
};

testFun();

const testFunWithContext = testFun.bind({});

testFunWithContext();
