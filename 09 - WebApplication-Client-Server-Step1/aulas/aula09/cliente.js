//nomeRazao string not null
//nomeFantasia string pode ser null
//cpfCnpj unique customValidador de cpf e cnpj
//nascFundacao
//telefone
//celular
//email validador pronto


const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize.js");

class Cliente extends Model {

    static validateCpf = () => {
        function TestaCPF(strCPF) {
            var Soma;
            var Resto;
            Soma = 0;
            if (strCPF == "00000000000") return false;

            for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10))) return false;

            Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11))) return false;
            return true;
        }
        var strCPF = "12345678909";
        alert(TestaCPF(strCPF));
    }

    static validateCnpj = () => {
        function validarCNPJ(cnpj) {

            cnpj = cnpj.replace(/[^\d]+/g, '');

            if (cnpj == '') return false;

            if (cnpj.length != 14)
                return false;

            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                return false;

            // Valida DVs
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0, tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;

            return true;

        }
    }
    static verifica_cpf_cnpj(value) {
        value = value.toString();
        value = value.replace(/[^0-9]/g, '');
        if (value.length === 11) {
            return 'CPF';
            this.validateCpf();
        } else if (value.length === 14) {
            return 'CNPJ';
            this.validateCnpj();
        } else {
            return false;
        }
    }

    static alerta() {
        console.log('alerta');
    }

    getFullName() {
        return this.firstName + " " + this.lastName + this.birthDate;
    }
}

Cliente.init({
    nomeRazao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeFantasia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpfCnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            custonValidator(value) {
                if (value === true && this.age !== 19) {
                    throw new Error("errooooou");
                    this.verifica_cpf_cnpj(value);
                }
            }
        }
    },
    nascFundacao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        //Other model options go here]
        sequelize,
        modelName: "cliente",
        tableName: "cliente", //nome da tabela
        timestamps: true, //mostra a dara
        createAt: "criacao", //mostra as criaçoes
        updateAt: "alteracao" //mostra as alteraçoes
    });

//'sequelize.define ´ also returns the model
console.log(Cliente === sequelize.models.Cliente)

module.exports = Cliente;
