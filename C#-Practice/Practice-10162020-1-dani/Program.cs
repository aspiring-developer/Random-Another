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
        }
    }
}
