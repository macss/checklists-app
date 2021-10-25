import Common from "./Common";

enum VechicleTypes {
  Truck = 'caminhão',
  Car = 'carro'
}

interface Vehicle extends Common {
  license_plate: string
  fleet: string
  type: VechicleTypes
}

export default Vehicle