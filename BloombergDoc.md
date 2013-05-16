---
layout: page
title: "Bloomberg Documentation"
description: "as known by Eric Robinson"
tagline:  "as known by Eric Robinson"
---
{% include JB/setup %}

# Console Application
## Classes
- ConsoleApp.cs

### ConsoleApp.cs

This class can take in 3 options. --Help --Securities --Quotes. Help displays what the program does as well as the other two options. Securities will update the securities from the Bloomberg web service into the database. Quotes will update the quotes from the Bloomberg web service to the database.

#### Methods

` public static void Main(string[] args) `

# Core Logic Layer
- Core.cs

# Data Logic Layer

## Classes
- Repository.cs
- Currency.cs (object)
- CurrencySpotExchange.cs (object)
- MasterInstitution.cs (object)
- Security.cs (object)
- SecurityPriceHistory.cs (object)
- Settings.cs (object)

### Repository.cs

This class is responsible for all connections and requests done to the Database. 

#### Methods

` private List<Security> getSecurityObjects(string query) `

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

