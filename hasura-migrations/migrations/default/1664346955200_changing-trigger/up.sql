CREATE OR REPLACE FUNCTION public.check_user_name() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
    if length(new.name) < 5 then
        raise exception 'user name should be atleast of length 5!';
    else 
        return new;
    end if;
end;
$$;