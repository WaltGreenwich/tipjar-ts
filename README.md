# 🚀 TipJar - Proyecto Solidity con Hardhat y TypeScript

## Descripción

Contrato inteligente que permite a los usuarios enviar propinas en ETH junto con un mensaje. Solo el owner puede retirar los fondos. Proyecto desarrollado con Hardhat, TypeScript y Ethers.js en la testnet Sepolia.

## Tecnologías Utilizadas

- Solidity
- Hardhat con Ignition
- TypeScript
- Ethers.js v6
- Etherscan API
- Alchemy RPC
- Sepolia Testnet

## 📦 Instalación

```bash
npm install
```

## ⚙️ Configuración

Crear un archivo .env en la raíz con las siguientes variables:

```
SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/TU_API_KEY
PRIVATE_KEY=TU_CLAVE_PRIVADA_SIN_0x
ETHERSCAN_API_KEY=TU_API_KEY_ETHERSCAN
```

✅ Asegúrate de que tu archivo .gitignore tenga .env para proteger tu clave privada.

## 🔨 Comandos del Proyecto

Compilar el Proyecto

```
npx hardhat compile
```

Testear el Contrato

```
npx hardhat test
```

Desplegar en Sepolia con Ignition

```
npx hardhat ignition deploy ignition/modules/TipJar.ts --network sepolia --verify
```

## 📜 Scripts de Interacción

Enviar Propina

```
npx hardhat run scripts/tip.ts --network sepolia
```

Consultar Balance

```
npx hardhat run scripts/balance.ts --network sepolia
```

Retirar Fondos

```
npx hardhat run scripts/withdraw.ts --network sepolia

```

## 📈 Contrato Desplegado

Dirección: `0x66Da0b2A6A84a88Da071466E8e2eF6957303fF27`

## ✅ Tests Automatizados

Se encuentran en `test/TipJar.ts` y verifican:

- La recepción de propinas y emisión del evento.

- La restricción de la función `withdraw` solo para el owner.

- La correcta actualización del balance.

## 💡 Bonus (Opcional)

- Agregar struct con Tipper, message y timestamp.

- Guardar array de propinas.

- Crear una UI en React para enviar propinas y mostrar mensajes.

---

¡Eso es todo! Ahora tienes un contrato de propinas básico desplegado

## Autor

- [Walter Greenwich](https://github.com/WaltGreenwich)
