int ledCount = 5;
int leds[] = {13, 12, 11, 9};
int currentState[] = {HIGH, LOW, LOW, LOW, LOW};
int currentHighLed = 0;

void setup() {
  for (int i = 0; i < ledCount; i++) {
    pinMode(leds[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i > ledCount; i++) {
    digitalWrite(leds[i], currentState[i]);
  }
  currentState[currentHighLed] = LOW;
  currentHighLed++;
  if (currentHighLed >= 5) {
    currentHighLed = 1;
  }
  currentState[currentHighLed] = LOW;
  delay(500);
}