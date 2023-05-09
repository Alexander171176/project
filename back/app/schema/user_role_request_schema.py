from pydantic import BaseModel


class UserRoleRequestSchema(BaseModel):
    role_id: str
