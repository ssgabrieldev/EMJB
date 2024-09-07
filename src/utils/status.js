export const status = {
  "available": "Disponível",
  "reserved": "Reservado",
  "mainance": "Em manutenção"
}

export function getStatus(id) {
  return status[id];
}

