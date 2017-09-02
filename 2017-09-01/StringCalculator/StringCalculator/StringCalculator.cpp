//
//  StringCalculator.cpp
//  StringCalculator
//
//  Created by Camtasia QA on 9/1/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#include "StringCalculator.hpp"
#include <list>

int StringCalculator :: add( std::string input )
{
   int result = 0;
   if ( input.empty() )
   {
      return result;
   }
   while ( input.find( '\n') != std::string::npos )
   {
      input = input.replace( input.find_first_of( '\n' ), 1, "," );
   }
   if ( input.find( ',' ) != std::string::npos )
   {
      std::list<std::string> splitStringAroundCommas;
      while ( input.find( ',' ) != std::string::npos )
      {
         int commaPosition = (int) input.find_first_of( ',' );
         splitStringAroundCommas.push_back( input.substr( 0, commaPosition ) );
         input = input.substr( commaPosition + 1, input.length() );
      }
      for ( std::list<std::string>::iterator it = splitStringAroundCommas.begin();
                                              it != splitStringAroundCommas.end();
                                                                              ++it )
      {
         result += std::stoi( *it ); 
      }
   }                                      // after this loop there is still one last string unaccounted for
   return result + std::stoi( input );  
}











