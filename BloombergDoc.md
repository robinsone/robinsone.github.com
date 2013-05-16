---
layout: page
title: "Bloomberg Documentation"
description: "as known by Eric Robinson"
---
{% include JB/setup %}

# Console Application
## Classes
- ConsoleApp.cs

### ConsoleApp.cs

This class can take in 3 options. --Help --Securities --Quotes. Help displays what the program does as well as the other two options. Securities will update the securities from the bloomberg web service into the database. Quotes will update the quotes from the bloomberg web service to the database.

#### Methods

` public static void Main(string[] args) `

# Core Logic Layer

# Data Logic Layer

## Classes
- Repository.cs
- Currency.cs
- CurrencySpotExchange.cs
- Data.cs
- MasterInstitution.cs
- Security.cs
- SecurityPriceHistory.cs
- Settings.cs

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

---

This class is responsible for all connections and requests done to the Database. 

### Private

` private List<Security> getSecurityObjects(string query) `

### Public
` public List<Security> getSecuritiesBySEDOL(string SEDOL, string currencyCode) `

` public List<Security> getSecuritiesByISIN(string ISIN, string currencyCode) `

` public List<Security> getSecuritiesByCUSIP(string CUSIP, string ISIN, string currencyCode) `

` public List<Security> getSecuritiesBySymbol(string Symbol, string SymbolCN, string currencyCode) `

`public MasterInstitution getMasterInstitution()`

` public List<Currency> getCurrency() `

` public void updateSecurityIdentifiers(Security security) `

` public List<Settings> getSettings() `

` public void updateCurrencySpotExchange(CurrencySpotExchange c) `

` public void insertCurrencySpotExchange(CurrencySpotExchange c) `

` public void UpdateSecurityPriceHistory(SecurityPriceHistory SecurityPriceHistory) `

` public void updateSecurityIdentifiers(Security security) `
