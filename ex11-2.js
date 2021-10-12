const Hello = () => console.log('hello');

try 
{
    Hello();
} catch (e) {
    console.error(e);
} finally {
    console.log('finally1');
}

console.log("=======================");

try 
{
    printBye();
} catch (e) {
    console.error(e);
} finally {
    console.log('finally2');
}

