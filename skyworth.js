const codes = {
  "On/Off" : "0000 006D 0024 0000 0000 0156 0000 002A 0000 0055 0000 0055 0000 0055 0000 002A 0000 002A 0000 002A 0000 002A 0000 002A 0000 0055 0000 0055 0000 0055 0000 002A 0000 002A 0000 002A 0000 002A 0000 002A 0000 002A 0000 0055 0000 0055 0000 002A 0000 002A 0000 002A 0000 002A 0000 0055 0000 0055 0000 002A 0000 002A 0000 0055 0000 0055 0000 0055 0000 0055 0000 0712 0000 0156 0000 0055",
  "Mute" : "0000 006D 0021 0000 0000 0156 0000 002A 0000 0055 0000 0055 0000 0055 0000 002A 0000 002A 0000 002A 0000 002A 0000 002A 0000 0055 0000 0055 0000 0055 0000 002A 0000 002A 0000 002A 0000 002A 0000 0055 0000 002A 0000 0055 0000 0055 0000 002A 0000 002A 0000 002A 0000 002A 0000 002A 0000 0055 0000 002A 0000 002A 0000 0055 0000 0055 0000 0055 0000 0055"
};

function ir(key){
  msg(codes[key]);
  transmit(codes[key]);
}
