const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const endereco = order.address.street;
  const numero = order.address.number;
  const apartamento = order.address.apartment;

  return(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, ${endereco}, Nº: ${numero}, AP: ${apartamento}.`)
}

customerInfo(order);

console.log(Object.values(order.order))

const orderModifier = (order) => {
 const cliente = order.name;
 const pizzas = Object.keys(order.order.pizza).join(', ') 
 const drinks = order.order.drinks.coke.type;
 const total = order.payment.total = '50';
 return (`Olá ${cliente}, o total de seu pedido de ${pizzas} e ${drinks} é R$ ${total},00`)
}

orderModifier(order);

//Agora você vai fazer alguns exercícios de fixação.

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  // Note que o parâmetro da função já está sendo passado na chamada da função.

// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  // Modifique o nome da pessoa compradora.
  // Modifique o valor total da compra para R$ 50,00.
