     returnValue.removed = document;\n            returnValue.newDocument = null;\n            return returnValue;\n        }\n        else if (operation.op === '_get') {\n            operation.value = document;\n            return returnValue;\n        }\n        else { /* bad operation */\n            if (validateOperation) {\n                throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);\n            }\n            else {\n                return returnValue;\n            }\n        }\n    } /* END ROOT OPERATIONS */\n    else {\n        if (!mutateDocument) {\n            d