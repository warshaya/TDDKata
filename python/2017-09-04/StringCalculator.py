class StringCalculator:

#   def __init__(self):


   def add( self, str ):
      if ( str == '' ):
         return 0
      if ( str.startswith('//') ):
         str = str.split('//')[1]
         str = str.split('\n', 1)
         str[1] = str[1].replace( str[0], ',')
         str = str[1]
      if ( str.find('\n') ):
         str = str.replace('\n', ',')
      if ( str.find(',') ):
         values = str.split(',')
         result = 0
         for x in values:
            result += int(x)
         return result
      return int( str )

