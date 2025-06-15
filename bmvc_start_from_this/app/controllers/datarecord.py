from app.models.curriculo import Curriculo
import json

class DataRecord():
    """Banco de dados JSON para o recurso Usuários"""

    def __init__(self):
        self.user_accounts= [] # banco (json)
        try:
            with open("app/controllers/db/user_accounts.json", "r") as arquivo_json:
                user_data = json.load(arquivo_json)
                self.user_accounts = [Curriculo(**data) for data in user_data]
                self.limit = len(self.user_accounts) - 1  # Definindo o limite com base no número de contas de usuário
        except FileNotFoundError:
            self.user_accounts.append(Curriculo('Guest', '000000'))
            self.limit = len(self.user_accounts) - 1  # Definindo o limite como 0 no caso de nenhum arquivo encontrado


    def work_with_parameter(self, parameter):
        try:
            index = int(parameter)  # Convertendo o parâmetro para inteiro
            if index <= self.limit:
                return self.user_accounts[index]
        except (ValueError, IndexError):
            return None  # Tratamento de erro se o índice for inválido