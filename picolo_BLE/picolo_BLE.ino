void setup() {
  
  Serial.begin(115200); //9600
  pinMode(13, OUTPUT);  
  
}
  
// the loop function runs over and over again forever
void loop() {


  while (Serial.available() == 0);
    char getData = Serial.read();  

    if (getData == '+') {
      digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
    }
    
    if (getData == '-') {
      digitalWrite(13,LOW);   // turn the LED on (HIGH is the voltage level)
    }
  

}


