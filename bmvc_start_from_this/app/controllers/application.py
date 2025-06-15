from bottle import template
from bottle import redirect
from app.controllers.datarecord import DataRecord

class Application():

    def __init__(self):
        self.pages = {
            'curriculo': self.curriculo
        }
    
        self.models= DataRecord()
    
    def render(self,page,parameter=None):
        content = self.pages.get(page, self.helper)
        if not parameter:
            return content()
        else:
            return content(parameter)

    def curriculo(self, parameter=None):
        if not parameter:
            return template('app/views/html/curriculo', transferred=False) # CORRIGIDO
        else:
            info = self.models.work_with_parameter(parameter)
            if not info:
                redirect('/curriculo') # CORRIGIDO: use 
            else:
                return template('app/views/html/curriculo', transferred=True, data=info) # CORRIGIDO


    def helper(self):
        return template('app/views/html/helper')
    