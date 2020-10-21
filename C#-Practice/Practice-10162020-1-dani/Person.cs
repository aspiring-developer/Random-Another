using System;

namespace Practice_10162020_1_dani
{
    class Person
    {
        public string Name;
        public int Age;
        public bool HasPet;

        public void Display()
        {
            Console.WriteLine("Hi, I am " + Name + " and I am " + Age + " years old.");
        }
    }
}
