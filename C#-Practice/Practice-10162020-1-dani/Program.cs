using System;

namespace Practice_10162020_1_dani
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();

            person.Name = "SS";
            person.Age = 42;
            person.HasPet = true;

            person.Greeting();

            // The above codes are from Person class.
            // The below are from Calculator class.
            int result = Calculator.Add(5, 10);
            Console.WriteLine("This is from Calculator class: " + result);
        }

    }
}
