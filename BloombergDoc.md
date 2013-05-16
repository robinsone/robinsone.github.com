---
layout: page
title: "Bloomberg Documentation"
description: "as known by Eric Robinson"
---
{% include JB/setup %}

## SQL connections
Use `Repository pattern` 

### getCurrencyRate();
__Currency Table__ Columns needed 
    
    "SELECT * FROM Currency WHERE IsActive = 1"
+ isActive
+ isFixedRate
+ currencyCode
+ isQuoteInNativeCurrency

__MasterInstitution__ Table Columns needed
    
    "SELECT * FROM MasterInstitution WHERE FinancialInstitutionID = 1"
+ FinancialInsitutionID
+ BaseCurrencyCode


## Old Program Notes

#### Init(); 
this function gets the FTP properties from the Database to send the bloomberg header 


# New Code

## Repository.cs
### Private

` private List<Security> getSecurityObjects(string query) `

### Public
` public List<Security> getSecurities(string SEDOL, string currencyCode) `

` public List<Security> getSecurities(string ISIN, string currencyCode) `

` public List<Security> getSecurities(string CUSIP, string ISIN, string currencyCode) `

` public List<Security> getSecurities(string Symbol, string SymbolCN, string currencyCode) `

`public MasterInstitution getMasterInstitution()`

` public List<Currency> getCurrency() `

` public void updateSecurityIdentifiers(Security security) `