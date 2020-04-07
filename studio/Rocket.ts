import {Payload} from "./Payload"
import {Astronaut} from "./Astronaut"
import {Cargo} from "./Cargo"

export class Rocket {
    name: string
    totalCapacityKg: number
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = []

    constructor (name: string, totalCapacityKg: number) {
        this.name = name
        this.totalCapacityKg = totalCapacityKg
    }

    sumMass( items: Payload[] ): number {
        let sum = 0
        for (let payload of items) {
            sum += payload.massKg
        }
        return sum
    }

    currentMassKg(): number {
        let allPayloadItems: Payload[] = []
        allPayloadItems = allPayloadItems.concat(this.astronauts)
        allPayloadItems = allPayloadItems.concat(this.cargoItems)
        return this.sumMass(allPayloadItems)
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true
        }
        return false
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true
        }
        return false
    }
}